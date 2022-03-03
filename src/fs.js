import util from "util"
import fs from "fs"

const mkdir = util.promisify(fs.mkdir)
const rmdir = util.promisify(fs.rmdir)
const writeFile = util.promisify(fs.writeFileSync)

export const BASE_PATH = './backups'

export const mkPath = async path => {
  try {
    await mkdir(path)
  } catch (e) {
    console.log('error create dir ' + path, e)
  }
}

mkPath(BASE_PATH)

export const rmPath = async path => {
  try {
    await rmdir(path)
  } catch (e) {
    console.log('error rm dir ' + path, e)
  }
}

export const storeData =async (data, path) => {
  try {
    await writeFile(`${BASE_PATH}/${path}`, JSON.stringify(data))
  } catch (e) {
    console.log('error creating file ' + path, e)
  }
}
