import { describe, expect, test } from "bun:test";
import {
  getFeaturedPackages,
  getPackageById,
  getPackageStaticParams,
} from "./packages";

describe("packages data module", () => {
  test("returns a known package by id", () => {
    expect(getPackageById("turquia-dos-sonhos")).toMatchObject({
      title: "Turquia dos Sonhos",
      price: "R$ 9.500",
    });
  });

  test("returns null for an unknown package id", () => {
    expect(getPackageById("unknown-package")).toBeNull();
  });

  test("returns static params including a known id", () => {
    expect(getPackageStaticParams()).toContainEqual({
      id: "turquia-dos-sonhos",
    });
  });

  test("returns featured package cards", () => {
    expect(getFeaturedPackages()).toContainEqual({
      id: "turquia-dos-sonhos",
      title: "Turquia dos Sonhos",
      duration: "10 Dias",
      price: "R$ 9.500",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    });
  });
});
