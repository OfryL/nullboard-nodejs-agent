import { BASE_PATH, mkPath, rmPath, storeData } from "./fs"

const CONF_FILE_NAME = 'app-config.json'

const pad = (num, size) => {
  let s = num+""
  while (s.length < size) s = "0" + s
  return s
}

export const saveConfig = async ({ conf }) => {
  if (conf) {
    await storeData(JSON.parse(conf), CONF_FILE_NAME)
  }
}

export const saveBoard = async ({ data, meta }) => {
  const jsonData = JSON.parse(data)
  const { revision, id } = jsonData
  await mkPath(`${BASE_PATH}/${id}`)
  await Promise.all([
    storeData(jsonData, `${id}/rev-${pad(revision, 8)}.nbx`),
    storeData(JSON.parse(meta), `${id}/meta.json`)
  ])
  return true
}

export const deleteBoard = async ({ id }) => {
 await rmPath(`${BASE_PATH}/${id}`)
}
