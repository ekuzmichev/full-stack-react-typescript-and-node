import "./App.css";
import DisplayText from "./DisplayText";

function App() {
  const getUserFullName = async (username: string): Promise<string> => {
    const userResponse: Response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (userResponse.ok) {
      const users = await userResponse.json();
      const userByName = users.find((user: any) => {
        return user.username.toLowerCase() === username.toLowerCase();
      });
      return userByName.name;
    }
    return "";
  };

  return (
    <div className="App">
      <DisplayText getUserFullName={getUserFullName} />
    </div>
  );
}

export default App;
