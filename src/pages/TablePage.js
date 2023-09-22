import SortableTable from '../components/SortableTable';

export default function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
        { name: 'Cherry', color: 'bg-green-700', score: 2.5 },
    ];

    const config = [
        { label: 'Name', render: (item) => item.name, sortValue: (item) => item.name },
        { label: 'Color', render: (item) => <div className={`p-3 m-2 ${item.color}`} /> },
        { label: 'Score', render: (item) => item.score, sortValue: (item) => item.score },
        { label: 'Score Squared', render: (item) => item.score ** 2, sortValue: (item) => item.score ** 2 }
    ];

    const keyFn = (item) => {
        return item.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}
