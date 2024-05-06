import { FilterType } from "./types";

const { SELECT, TEXT } = FilterType;

const minExpOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
]

const remoteOptions = [
    { value: "remote", label: "Remote" },
    { value: 'hybrid', label: "Hybrid" },
    { value: "in-office", label: "In-office" },
]

const minSalaryOptions = [
    { value: 0, label: "0$" },
    { value: 10, label: "10$" },
    { value: 20, label: "20$" },
    { value: 30, label: "30$" },
    { value: 40, label: "40$" },
    { value: 50, label: "50$" },
    { value: 60, label: "60$" },
    { value: 70, label: "70$" },
]

// roles filter group
const engineeringOptions = [
    { value: 'backend', label: "Backend" },
    { value: 'frontend', label: "Frontend" },
    { value: 'fullstack', label: "Fullstack" },
    { value: 'iOS', label: "IOS" },
    { value: 'flutter', label: "Flutter" },
    { value: 'react native', label: "React Native" },
    { value: 'android', label: "Android" },
    { value: 'tech lead', label: "Tech Lead" },
    { value: 'dev-ops', label: "Dev-Ops" },
    { value: 'data engineer', label: "Data Engineer" },
    { value: 'data science', label: "Data Science" },
    { value: 'computer-vision', label: "Computer-Vision" },
    { value: 'nlp', label: "NLP" },
    { value: 'deep-learning', label: "Deep-Learning" },
    { value: 'test / qa', label: "Test / QA" },
    { value: 'web3', label: "Web3" },
    { value: 'deep-learning', label: "Deep-Learning" },
    { value: 'sre', label: "SRE" },
    { value: 'data-infrastructure', label: "Data-Infrastructure" },
];

const designOptions = [
    { value: "designer", label: "Designer" },
    { value: "design manager", label: "Design Manager" },
    { value: "graphic designer", label: "Graphic Designer" },
    { value: "designer", label: "Designer" },
]

const productOptions = [
    { value: "product manager", label: "Product Manager" },
]

const operationsOptions = [
    { value: "operations manager", label: "Operations Manager" },
    { value: "founder’s office/chief Of staff", label: "Founder’s Office/Chief Of Staff" },
]

const salesOptions = [
    { value: "sales development representative", label: "Sales Development Representative" },
    { value: "Account Executive", label: "Account Executive" },
    { value: "account manager", label: "Account Manager" },
]

const marketingOptions = [
    { value: "digital marketing manager", label: "Digital Marketing Manager" },
    { value: "growth hacker", label: "Growth Hacker" },
    { value: "marketing", label: "Marketing" },
    { value: "product marketing manager", label: "Product Marketing Manager" },
]

const roleOptions = [
    { label: "Engineering", options: engineeringOptions },
    { label: "Design", options: designOptions },
    { label: "Engineering", options: engineeringOptions },
    { label: "Product", options: productOptions },
    { label: "Operations", options: operationsOptions },
    { label: "Sales", options: salesOptions },
    { label: "Marketing", options: marketingOptions },
]

export const filterConfig = [
    {
        name: "roles",
        type: SELECT,
        placeholder: "Roles",
        options: roleOptions,
        isMulti: true,
    },
    {
        name: "minExp",
        type: SELECT,
        placeholder: "Experience",
        options: minExpOptions,
        isMulti: false,
    },
    {
        name: "location",
        type: TEXT,
        placeholder: "Search Location",
    },
    {
        name: "isRemote",
        type: SELECT,
        placeholder: "Remote",
        options: remoteOptions,
        isMulti: true,
    },
    {
        name: "minJdSalary",
        type: SELECT,
        placeholder: "Minimum Base Pay Salary",
        options: minSalaryOptions,
        isMulti: false,
    },
    {
        name: "companyName",
        type: TEXT,
        placeholder: "Search Company Name",
    },
]