function MainPage(para) {
  if (para?.condition) {
    return (
      <div>
        <h1>Main Page Compoent: First Condition</h1>
        <p>condition = {para?.condition}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Main Page Compoent: Second Condition</h1>
        <p>condition = {para?.condition}</p>
      </div>
    );
  }
}

export default MainPage;
