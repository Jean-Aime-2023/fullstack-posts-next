export default function Containre({children}:any) {
    return (
      <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col">
          {children}
      </div>
    );
  }
  