/* This is temporary data before backend and database */
function createData(name, uuid, jobs, reviews, alumni) {
    return { name, uuid, jobs, reviews, alumni };
}

export const companies_columns = [
    { id: 'name', label: 'Company', minWidth: 170 },
    { id: 'uuid', label: 'uuid', minWidth: 100 },
    {
        id: 'jobs',
        label: 'Jobs',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'reviews',
        label: 'Reviews',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'alumni',
        label: 'Alumni',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

export const companies_rows = [
    createData('Apple', '001', 10, 1, 3),
    createData('Microsoft', '002', 3, 1, 2),
    createData('Blackrock', '003', 2, 5, 4),
    createData('AWS', '004', 6, 1, 2),
    createData('Optiver', '005', 8, 1, 2),
    createData('Akuna', '006', 4, 1, 2),
    createData('ByteDance', '007', 2, 1, 2),
];
