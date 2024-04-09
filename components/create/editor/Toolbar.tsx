const Toolbar = () => {
  return (
    <div id="toolbar">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-image" />

      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
    </div>
  );
};

export default Toolbar;
