interface Props {
  label: string;
}

const Tag: React.FC<Props> = ({ label }) => {
  return (
    <div className="inline-block text-xs leading-3 text-display border border-display-tag py-1 px-2">
      {label}
    </div>
  );
};

export default Tag;
