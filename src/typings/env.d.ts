/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GLOB_API_URL: string;
	readonly VITE_APP_API_BASE_URL: string;
	readonly VITE_GLOB_OPEN_LONG_REPLY: string;
	readonly VITE_GLOB_APP_PWA: string;
	
	readonly API_UPLOADER: string;
	readonly FILE_SERVER: string;
	readonly FILE_SERVER_API_KEY: string;
	readonly R2_DOMAIN: string;
	readonly R2_BUCKET_NAME: string;
	readonly R2_ACCOUNT_ID: string;
	readonly R2_KEY_ID: string;
	readonly R2_KEY_SECRET: string;

}
