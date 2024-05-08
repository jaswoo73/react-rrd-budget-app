// rrd imports
import { redirect } from "react-router-dom";

// library
import { deleteItem } from "../helpers";

// helpers
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem("userName");
  deleteItem("budgets");
  deleteItem("expenses");
  toast.success("You've deleted your account!");
  // return redirect
  return redirect("/");
}
