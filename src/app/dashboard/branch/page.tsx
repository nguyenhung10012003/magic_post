'use client'

import { useAuth } from "@/hook/AuthContext";
import BranchList from "./BranchList";

export default function Branch() {
  return (
    <div>
      <BranchList/>
    </div>
  )
}