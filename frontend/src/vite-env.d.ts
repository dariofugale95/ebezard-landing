/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_API_GATEWAY_URL: string;
	VITE_FRONTEND_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
