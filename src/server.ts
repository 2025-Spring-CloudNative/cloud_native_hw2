import express from "express"
import * as math from "./math.service"

const server = express()
server.use(express.json())

server.post("/sum", (req, res) => {
    const { array } = req.body

    try {
        const result = math.sumArray(array)
        res.status(200).json({ result: result })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
