import type { TSESLint } from '@typescript-eslint/utils';

import configs from './configs';
import rules from './rules';
import { SupportedTestingFramework } from './utils';

// we can't natively import package.json as tsc will copy it into dist/
// (same as typescript-eslint https://github.com/typescript-eslint/typescript-eslint/blob/7defffef8fe77387a22dbd5a538ff4cafcf81253/packages/eslint-plugin/src/index.ts#L18)
const {
	name: packageName,
	version: packageVersion,
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('../package.json') as { name: string; version: string };

const plugin = {
	meta: {
		name: packageName,
		version: packageVersion,
	},
	// TODO: improve this
	// ugly cast for now to keep TypeScript happy since
	// we don't have types for flat config yet
	configs: {} as Record<
		SupportedTestingFramework | `flat/${SupportedTestingFramework}`,
		TSESLint.SharedConfig.RulesRecord
	>,
	rules,
};

plugin.configs = {
	...configs,
	...(Object.fromEntries(
		Object.entries(configs).map(([framework, config]) => [
			`flat/${framework}`,
			{
				plugins: { 'testing-library': plugin },
				rules: config.rules,
			},
		])
	) as unknown as Record<
		`flat/${SupportedTestingFramework}`,
		TSESLint.SharedConfig.RulesRecord & { plugins: unknown }
	>),
};

export = plugin;
