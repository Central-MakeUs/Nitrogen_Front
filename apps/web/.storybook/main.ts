import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-designs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(new VanillaExtractPlugin());

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@/shared': path.resolve(__dirname, '../src/shared'),
      '@/entities': path.resolve(__dirname, '../src/entities'),
      '@/features': path.resolve(__dirname, '../src/features'),
      '@/widgets': path.resolve(__dirname, '../src/widgets'),
    };

    return config;
  },
};

export default config;
