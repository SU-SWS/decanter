/**
 * Decanter Tailwind Configuration (ES Module)
 */
import plugin from 'tailwindcss/plugin.js';
import { createRequire } from 'module';
import { createDecanterConfig } from './tw.config.js';

const require = createRequire(import.meta.url);

export default createDecanterConfig(plugin, require);
