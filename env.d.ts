/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PERSONAL_URL: string
  readonly VITE_GITHUB_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
