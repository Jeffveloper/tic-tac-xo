const TableHeadTemplate = ({ text }: TableHeadTemplateProps) => {
	return (
		<div className="py-4 border-t-2  border-r-2 border-white">
			<h2 className=" w-fit text font-bold">{text}</h2>
		</div>
	);
};

type TableHeadTemplateProps = {
	text: string;
};

export default TableHeadTemplate;
