import { ss } from '@/utils/storage'
import { t } from '@/locales'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://previewengine.zoho.com.cn/image/WD/vrz5kad364f4d4ef944df9d593b5e20bb96fb?version=1.0&width=2046&height=1536',
      name:  t('mjset.sysname'),//'AI绘图',
      description: 'CopyRight© <a href="https://HeiGPT.com/" class="text-blue-500" target="_blank" >HeiGPT.Inc</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
