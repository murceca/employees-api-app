import { v4 as uuidv4 } from "uuid";

let employees: Employee[] = [
  {
    id: 0,
    name: "John Doe",
    title: "Chief Happinnes Officer",
    tribe: {
      id: 1,
      name: "Interstellar",
      department: "Other Engineering",
    },
  },
  {
    id: 1,
    name: "Edward Lewis",
    title: "Software Engineer",
    tribe: {
      id: 2,
      name: "Data Engineering",
      department: "Data",
    },
  },
  {
    id: 2,
    name: "Eliana Heilig",
    title: "Analyst",
    tribe: {
      id: 3,
      name: "Callendar",
      department: "Engineering Sales CRM",
    },
  },
  {
    id: 3,
    name: "Mariam de Haan",
    title: "Principal Engineer",
    tribe: {
      id: 4,
      name: "Focus",
      department: "Engineering Sales CRM",
    },
  },
  {
    id: 4,
    name: "Octavia Paul",
    title: "Intern",
    tribe: {
      id: 5,
      name: "Engineering Business Solutions",
      department: "Spark",
    },
  },
  {
    id: 5,
    name: "Phillip Quan",
    title: "Product Manager",
    tribe: {
      id: 6,
      name: "Data Platform",
      department: "Data",
    },
  },
];

interface Employee {
  id: number;
  name: string;
  title: string;
  tribe: object;
}

export function getEmployee(id: number): Employee | null {
  const result = employees.filter((employee) => employee.id == id);
  return result.length !== 0 ? structuredClone(result[0]) : null;
}

export function getEmployees(): Employee[] {
  return structuredClone(employees);
}

export function createEmployee(employee: {
  name: string;
  title: string;
  tribe: object;
}) {
  const newId = employees.length + 1;
  const newEmployee = {
    id: newId,
    name: employee.name,
    title: employee.title,
    tribe: employee.tribe,
  };
  employees.push(newEmployee);
  return newId;
}

export function deleteEmployeeById(id: number) {
  const indexToDelete = employees.findIndex((employee) => employee.id == id);
  if (indexToDelete === -1) return null;
  employees.splice(indexToDelete, 1);
  return id;
}
