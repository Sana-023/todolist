
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #567b6f 
		"--color-primary-50": "230 235 233", // #e6ebe9
		"--color-primary-100": "221 229 226", // #dde5e2
		"--color-primary-200": "213 222 219", // #d5dedb
		"--color-primary-300": "187 202 197", // #bbcac5
		"--color-primary-400": "137 163 154", // #89a39a
		"--color-primary-500": "86 123 111", // #567b6f
		"--color-primary-600": "77 111 100", // #4d6f64
		"--color-primary-700": "65 92 83", // #415c53
		"--color-primary-800": "52 74 67", // #344a43
		"--color-primary-900": "42 60 54", // #2a3c36
		// secondary | #454276 
		"--color-secondary-50": "227 227 234", // #e3e3ea
		"--color-secondary-100": "218 217 228", // #dad9e4
		"--color-secondary-200": "209 208 221", // #d1d0dd
		"--color-secondary-300": "181 179 200", // #b5b3c8
		"--color-secondary-400": "125 123 159", // #7d7b9f
		"--color-secondary-500": "69 66 118", // #454276
		"--color-secondary-600": "62 59 106", // #3e3b6a
		"--color-secondary-700": "52 50 89", // #343259
		"--color-secondary-800": "41 40 71", // #292847
		"--color-secondary-900": "34 32 58", // #22203a
		// tertiary | #58879d 
		"--color-tertiary-50": "230 237 240", // #e6edf0
		"--color-tertiary-100": "222 231 235", // #dee7eb
		"--color-tertiary-200": "213 225 231", // #d5e1e7
		"--color-tertiary-300": "188 207 216", // #bccfd8
		"--color-tertiary-400": "138 171 186", // #8aabba
		"--color-tertiary-500": "88 135 157", // #58879d
		"--color-tertiary-600": "79 122 141", // #4f7a8d
		"--color-tertiary-700": "66 101 118", // #426576
		"--color-tertiary-800": "53 81 94", // #35515e
		"--color-tertiary-900": "43 66 77", // #2b424d
		// success | #8da668 
		"--color-success-50": "238 242 232", // #eef2e8
		"--color-success-100": "232 237 225", // #e8ede1
		"--color-success-200": "227 233 217", // #e3e9d9
		"--color-success-300": "209 219 195", // #d1dbc3
		"--color-success-400": "175 193 149", // #afc195
		"--color-success-500": "141 166 104", // #8da668
		"--color-success-600": "127 149 94", // #7f955e
		"--color-success-700": "106 125 78", // #6a7d4e
		"--color-success-800": "85 100 62", // #55643e
		"--color-success-900": "69 81 51", // #455133
		// warning | #9c843a 
		"--color-warning-50": "240 237 225", // #f0ede1
		"--color-warning-100": "235 230 216", // #ebe6d8
		"--color-warning-200": "230 224 206", // #e6e0ce
		"--color-warning-300": "215 206 176", // #d7ceb0
		"--color-warning-400": "186 169 117", // #baa975
		"--color-warning-500": "156 132 58", // #9c843a
		"--color-warning-600": "140 119 52", // #8c7734
		"--color-warning-700": "117 99 44", // #75632c
		"--color-warning-800": "94 79 35", // #5e4f23
		"--color-warning-900": "76 65 28", // #4c411c
		// error | #851e1e 
		"--color-error-50": "237 221 221", // #eddddd
		"--color-error-100": "231 210 210", // #e7d2d2
		"--color-error-200": "225 199 199", // #e1c7c7
		"--color-error-300": "206 165 165", // #cea5a5
		"--color-error-400": "170 98 98", // #aa6262
		"--color-error-500": "133 30 30", // #851e1e
		"--color-error-600": "120 27 27", // #781b1b
		"--color-error-700": "100 23 23", // #641717
		"--color-error-800": "80 18 18", // #501212
		"--color-error-900": "65 15 15", // #410f0f
		// surface | #4e5265 
		"--color-surface-50": "228 229 232", // #e4e5e8
		"--color-surface-100": "220 220 224", // #dcdce0
		"--color-surface-200": "211 212 217", // #d3d4d9
		"--color-surface-300": "184 186 193", // #b8bac1
		"--color-surface-400": "131 134 147", // #838693
		"--color-surface-500": "78 82 101", // #4e5265
		"--color-surface-600": "70 74 91", // #464a5b
		"--color-surface-700": "59 62 76", // #3b3e4c
		"--color-surface-800": "47 49 61", // #2f313d
		"--color-surface-900": "38 40 49", // #262831
		
	}
}