"use client";
import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = "boafo_5678";
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null; // nothing to render
}