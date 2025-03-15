export default function Dropdown() {
  return (
    <>
      {/* Dropdown using details and summary */}
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <br />
      <br />

      {/* Dropdown menu */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click ⬇️
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <br />
      <br />

      {/* Dropdown on hover */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Hover
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <br />
      <br />

      {/* More examples */}
      {/* Helper dropdown */}
      <div className="flex gap-1">
        <p>A normal text and a helper dropdown</p>
        <div className="dropdown dropdown-top">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              tabIndex={0}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div
            tabIndex={0}
            className="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm"
          >
            <div tabIndex={0} className="card-body">
              <h2 className="card-title">You needed more info?</h2>
              <p>Here is a description!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
