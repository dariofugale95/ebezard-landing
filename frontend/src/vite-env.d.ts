/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_API_GATEWAY_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
