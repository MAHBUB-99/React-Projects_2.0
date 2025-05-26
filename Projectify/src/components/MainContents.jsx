import Header from "./Header";
import ProjectContent from "./ProjectContent";

export default function MainContents() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <Header />
      <ProjectContent />
    </main>
  );
}
