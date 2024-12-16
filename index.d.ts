/**
 * Keeping types here instead of generating types from the plugin for the same reasons
 * as typescript-eslint:
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/rules.d.ts
 */

import type { Linter, Rule } from 'eslint';

declare const plugin: {
	meta: {
		name: string;
		version: string;
	};
	configs: {
		angular: Linter.LegacyConfig;
		dom: Linter.LegacyConfig;
		marko: Linter.LegacyConfig;
		react: Linter.LegacyConfig;
		svelte: Linter.LegacyConfig;
		vue: Linter.LegacyConfig;
		'flat/angular': Linter.FlatConfig;
		'flat/dom': Linter.FlatConfig;
		'flat/marko': Linter.FlatConfig;
		'flat/react': Linter.FlatConfig;
		'flat/svelte': Linter.FlatConfig;
		'flat/vue': Linter.FlatConfig;
	};
	rules: {
		[key: string]: Rule.RuleModule;
	};
};

export = plugin;
