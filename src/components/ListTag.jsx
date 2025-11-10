function ListTag(props) {
  return (
    <>
      {props.tags && (
        <ul className="flex justify-center gap-x-10 mt-5">
          {props.tags.map((tag, i) => (
            <li key={i} className="bg-blue-700 text-white py-1 px-4 rounded-full">
              {tag.name}
            </li>
          ))}
        </ul>
      )}

      {props.accesses && (
        <ul className="flex justify-center gap-x-10 mt-5">
          {props.accesses.url && (
            <li className="">
              <a
                href={props.accesses.url}
                className="hover:bg-amber-50 bg-blue-700  text-white py-1 px-4 rounded-full"
                target="_blank"
              >
                Visit site
              </a>
            </li>
          )}

          {props.accesses.fe && (
            <li className="">
              <a
                href={props.accesses.fe}
                className="hover:bg-amber-50 bg-blue-700 text-white py-1 px-4 rounded-full"
                target="_blank"
              >
                Front-end code
              </a>
            </li>
          )}

          {props.accesses.be && (
            <li className="">
              <a
                href={props.accesses.be}
                className="hover:bg-amber-50 bg-blue-700 text-white py-1 px-4 rounded-full"
                target="_blank"
              >
                Back-end code
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}

export default ListTag;
