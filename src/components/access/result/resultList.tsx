import Result from "./result";

export default function ResultList({
  TABLE_HEAD,
  listForResult,
  onChangeTodo,
  onDeleteTodo,
}: {
  TABLE_HEAD: {
    number: string;
    devices: string;
    length: string;
    status: string;
    equipment: string;
    work: string;
    total: string;
    button: string;
  }[];
  listForResult: {
    id: number;
    done: boolean;
    devices: string;
    length: number;
    status: string;
    costOfEquipment: string;
    costOfWork: string;
    total: string;
    detailStatus: boolean;
  }[];
  onChangeTodo: (nextTodo: any) => void;
  onDeleteTodo: (todoId: number) => void;
}) {
  return (
    <>
      <div className="result-table">
        <table className="rounded">
          <thead>
            {TABLE_HEAD.map((entry) => (
              <tr
                key={entry.number}
                className="grid 
                grid-cols-9 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-9
                text-xs sm:text-sm md:text-base
                gap-2"
              >
                <th>{entry.number}</th>
                <th className="col-span-3 lg:col-span-1">{entry.devices}</th>
                <th className="col-span-2 lg:col-span-1">{entry.length}</th>
                <th className="hidden sm:grid col-span-2 lg:col-span-1">
                  {entry.status}
                </th>
                <th className="hidden md:grid col-span-3 lg:col-span-2">
                  {entry.equipment}
                </th>
                <th className="hidden md:grid col-span-2 lg:col-span-1">
                  {entry.work}
                </th>
                <th className="col-span-2 lg:col-span-1">{entry.total}</th>
                <th>{entry.button}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {listForResult.map((entry: any) => (
              <tr
                key={entry.id}
                className="grid 
                grid-cols-9 sm:grid-cols-11 md:grid-cols-16 lg:grid-cols-9
                text-xs sm:text-sm md:text-base
                gap-2"
              >
                <Result
                  result={entry}
                  onChange={onChangeTodo}
                  onDelete={onDeleteTodo}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
