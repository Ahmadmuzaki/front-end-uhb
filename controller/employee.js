import { executeQuery } from '../config/db';
export const getAllEmployees = async (req, res) => {
    try {
        let employeeData = await executeQuery('select * from employee', [])
        res.send(employeeData)
    } catch (error) {
        res.status(500).json(error)
    }
}
