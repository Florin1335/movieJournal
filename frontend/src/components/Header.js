import React from "react";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import RegisterModal from "./RegisterModal";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className="d-flex flex-row pb-2 pb-sm-3">
      <Sidebar></Sidebar>
      <header className="w-100 ps-4 pe-4 pb-3">
        <div className="d-flex justify-content-center mb-2 mb-md-3">
          <Logo></Logo>
        </div>
        <div className="d-flex justify-content-between">
          <MenuButton></MenuButton>
          <SearchBar></SearchBar>
        </div>
      </header>
      <RegisterModal></RegisterModal>
      <LoginModal></LoginModal>
    </div>
  );
}
