import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/create/Editor"), {
  loading: () => <div>...loading</div>,
  ssr: false,
});

const CreatePage = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default CreatePage;
