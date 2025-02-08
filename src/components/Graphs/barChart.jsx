import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

function BarCharts(params) {
    const { param, option } = params;
    const student1Marks = param.result1.marks;
    const student2Marks = param.result2.marks;
    console.log(student1Marks, student2Marks);
    const mark = option === 's' ? 'sessional' : option === 'e' ? 'final' : 'total';

    // Merge both students' marks into a single dataset
    const chartData = student1Marks.map((subject, index) => ({
        course: subject.course,
        [param.result1.name]: subject[mark],
        [param.result2.name]: student2Marks[index] ? student2Marks[index][mark] : 0, // Ensure matching data
    }));

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={chartData} style={{ backgroundColor: '#fff' }}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="course" interval={'preserveStartEnd'} />
                <YAxis type="number" domain={[0, 100]} tickCount={6} />
                <Legend />
                <Tooltip />
                <Bar dataKey={param.result1.name} fill="goldenrod" />
                <Bar dataKey={param.result2.name} fill="crimson" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarCharts;
