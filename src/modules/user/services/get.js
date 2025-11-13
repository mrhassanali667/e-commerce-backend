import { getAll } from "../db/index.js"

const getData = async (body) => {
    try {
        return await getAll(body)

    } catch (error) {
        
    }
}

export {
    getData
}