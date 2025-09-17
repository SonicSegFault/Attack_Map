import arcsData from "../utility/arcsData.json";

export const ConsoleBox = () => {
  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-md border border-green-600 w-[700px] shadow-lg">
      <div className="mb-2 text-gray-400">
        Microsoft(R) Windows DOS  
        <br />© Microsoft Corp 1990-2001.  
        <br />C:
      </div>

      {arcsData.slice(0, 5).map((item, i) => (
        <div key={i} className="mb-2">
          <div>{`IP: ${item.ipAddress}`}</div>
          <div>{`Country: ${item.countryCode}`}</div>
          <div>{`Last Reported: ${new Date(item.lastReportedAt).toLocaleString()}`}</div>
          <div className="text-gray-600">------------------------------------</div>
        </div>
      ))}
    </div>
  );
};

