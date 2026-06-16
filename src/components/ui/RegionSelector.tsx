"use client";

import { useState, useMemo, useCallback } from "react";
import { getCities, getDistricts, PROVINCES } from "@/lib/region-data";

export interface RegionValue {
  province: string;
  city: string;
  district: string;
}

interface RegionSelectorProps {
  onChange?: (value: RegionValue) => void;
  defaultValue?: Partial<RegionValue>;
  showDistrict?: boolean;
  columns?: 2 | 3;
  className?: string;
  provincePlaceholder?: string;
  cityPlaceholder?: string;
  districtPlaceholder?: string;
}

const selectBase =
  "px-4 py-3 rounded-xl border border-muted-bg bg-white text-sm text-text-dark focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/10 transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted-bg/50";

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

  const cities = useMemo<string[]>(() => {
    if (!province) return [];
    return getCities(province);
  }, [province]);

  const districts = useMemo<string[]>(() => {
    if (!province || !city) return [];
    return getDistricts(province, city);
  }, [province, city]);

  const handleProvinceChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const p = e.target.value;
      setProvince(p);
      setCity("");
      setDistrict("");
      if (onChange) onChange({ province: p, city: "", district: "" });
    },
    [onChange]
  );

  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const c = e.target.value;
      setCity(c);
      setDistrict("");
      if (onChange) onChange({ province, city: c, district: "" });
    },
    [onChange, province]
  );

  const handleDistrictChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const d = e.target.value;
      setDistrict(d);
      if (onChange) onChange({ province, city, district: d });
    },
    [onChange, province, city]
  );

  const cityDisabled = !province;
  const districtDisabled = !city;

  const gridClass =
    columns === 2
      ? "grid grid-cols-2 gap-3"
      : showDistrict
        ? "grid grid-cols-3 gap-2"
        : "grid grid-cols-2 gap-3";

  return (
    <div className={className ?? gridClass}>
      {/* 省份 */}
      <select
        value={province}
        onChange={handleProvinceChange}
        className={selectBase}
      >
        <option value="">{provincePlaceholder}</option>
        {PROVINCES.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      {/* 城市 */}
      <select
        value={city}
        onChange={handleCityChange}
        disabled={cityDisabled}
        className={selectBase}
      >
        <option value="">{cityPlaceholder}</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* 区县 */}
      {showDistrict && (
        <select
          value={district}
          onChange={handleDistrictChange}
          disabled={districtDisabled}
          className={selectBase}
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
