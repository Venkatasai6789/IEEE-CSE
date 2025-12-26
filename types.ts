import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

export interface EventPreview {
  id: number;
  title: string;
  date: string;
  category: string;
}

export interface Category {
  name: string;
  href: string;
  icon?: React.ReactNode;
}