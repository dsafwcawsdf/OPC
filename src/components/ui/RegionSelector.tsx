"use client";

import { useState, useMemo } from "react";
import { getCities, getDistricts, PROVINCES } from "@/lib/region-data";

export interface RegionValue {
  province: string;
  city: string;
  district: string;
}

interface RegionSelectorProps {
  /** 选择变更回调 */
  onChange?: (value: RegionValue) => void;
  /** 默认选中值 */
  defaultValue?: Partial<RegionValue>;
  /** 是否显示区县级 */
  showDistrict?: boolean;
  /** 列数（默认3：省/市/区 各一列；设为2则省、市并排） */
  columns?: 2 | 3;
  /** 外层的 grid 类名 */
  className?: string;
  /** 每列 placeholder */
  provincePlaceholder?: string;
  cityPlaceholder?: string;
  districtPlaceholder?: string;
}

const baseSelectClass =
  "px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all w-full";

export default function RegionSelector({
  onChange,
  defaultValue,
  showDistrict = true,
  columns = 3,
  className,
  provincePlaceholder = "选择省份",
  cityPlaceholder = "选择城市",
  districtPlaceholder = "选择区县",
}: RegionSelectorProps) {
  const [province, setProvince] = useState(defaultValue?.province ?? "");
  const [city, setCity] = useState(defaultValue?.city ?? "");
  const [district, setDistrict] = useState(defaultValue?.district ?? "");

  const cities = useMemo(() => (province ? getCities(province) : []), [province]);
  const districts = useMemo(
    () => (province && city ? getDistricts(province, city) : []),
    [province, city]
  );

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const p = e.target.value;
    setProvince(p);
    setCity("");
    setDistrict("");
    onChange?.({ province: p, city: "", district: "" });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const c = e.target.value;
    setCity(c);
    setDistrict("");
    onChange?.({ province, city: c, district: "" });
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const d = e.target.value;
    setDistrict(d);
    onChange?.({ province, city, district: d });
  };

  const cols = columns === 2 ? 2 : showDistrict ? 3 : 2;

  return (
    <div className={className ?? `grid grid-cols-${cols} gap-3`}>
      <select value={province} onChange={handleProvinceChange} className={baseSelectClass}>
        <option value="">{provincePlaceholder}</option>
        {PROVINCES.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        value={city}
        onChange={handleCityChange}
        disabled={!province}
        className={baseSelectClass}
      >
        <option value="">{cityPlaceholder}</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {showDistrict && (
        <select
          value={district}
          onChange={handleDistrictChange}
          disabled={!city}
          className={baseSelectClass}
        >
          <option value="">{districtPlaceholder}</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
