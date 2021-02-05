import { createContext, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const defaultValue = [
        { id: uuidv4(), name: 'Bahadir Cakmak', email: 'bahadir0646@gmail.com', address: '940 South El, MI 48504 USA', phone: '(185) 654-2489' },
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(456) 452-5426' },
        { id: uuidv4(), name: 'Elvira Greer', email: 'elviragreer@mail.com', address: '2366 Goldie Lane, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: '5 Glenwood Ave. Brockton, Italy ', phone: '(787) 725-7625' },
        { id: uuidv4(), name: 'Florine Petty', email: 'florinepet@mail.com', address: '25 Sarah Drive  LA 70601', phone: '(378) 786-8767' },
        { id: uuidv4(), name: 'Orlando Nicholson', email: 'orlandonic@mail.com', address: 'Via Monte Bianco 34, Italy', phone: '(456) 456-7824' },
        { id: uuidv4(), name: 'Kristi M. Prince', email: 'kristirin@dayrep.com', address: '8 Glendale Ave. Davenport, USA', phone: '(789) 788-7842' },
        { id: uuidv4(), name: 'Paul Brown ', email: 'paulbrown@mail.com', address: '1109 Edgewood Avenue, Fresno', phone: '(456) 456-7824' },
        { id: uuidv4(), name: 'Lisa Verde', email: 'kristirin@dayrep.com', address: '3242 North Bend River Road, USA', phone: '(789) 788-7842' },
        { id: uuidv4(), name: 'Scott Callender', email: 'scootcal@dayrep.com', address: '2067 Deans Lane, Katonah', phone: '(789) 788-7842' }
    ]

    const reducer = (employees, action) => {
        switch (action.type) {
            case 'add_employee':
                return [...employees,{
                    id: uuidv4(),
                    name: action.employee.name,
                    email: action.employee.email,
                    address: action.employee.address,
                    phone: action.employee.phone
                }]

            case 'remove_employee':
                return employees.filter(employee => employee.id !== action.id)

            case 'update_employee':
                return employees.map((employee)=> (employee.id === action.id ? action.updatedEmployee : employee))
            
            default:
                return employees;

        }
    }

        const [employees,dispatch] = useReducer(reducer,[],
    
    () => {
        const employees = localStorage.getItem('employees')
        return employees ? JSON.parse(employees) : defaultValue
    })

    useEffect(() => {
         localStorage.setItem('employees',JSON.stringify(employees))
    })

    const sortedEmployees = employees.sort((a,b) => (a.name < b.name ? -1: 1))

    return(
        <EmployeeContext.Provider value ={{ sortedEmployees,dispatch}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider ;