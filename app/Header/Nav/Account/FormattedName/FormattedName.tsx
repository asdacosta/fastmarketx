import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

function FormattedName() {
  const userName = useSelector((state: RootState) => state.user.name);

  if (!userName) return <span>Account</span>;
  const firstName = userName.trim().split(" ")[0];
  const words = firstName.split(" ");
  const limited = words.slice(0, 7).join(" ");
  const shortName = words.length > 7 ? `${limited}...` : limited;

  return <span>{shortName}</span>;
}

export default FormattedName;
