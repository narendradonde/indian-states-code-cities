import states from "./indian-states-code-cities";

function App() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Indian States with code and Cities</h1>
            <div class="table-responsive-xl">
              <table className="table table-striped table-bordered" style={{ tableLayout: "fixed", width: "100%" }}>
                <thead class="table-light">
                  <tr>
                    <th scope="col">Sr. #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Cities</th>
                  </tr>
                </thead>
                <tbody>
                  {states.map((state, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{state.name}</td>
                        <td>{state.code}</td>
                        <td style={{ wordWrap: "break-word" }}>
                          {state.cities
                            .sort((a, b) => {
                              return a > b;
                            })
                            .map((city, index) => {
                              return (
                                <span key={index}>
                                  {index + 1}.&nbsp;&nbsp;{city}&nbsp;&nbsp;|&nbsp;&nbsp;
                                </span>
                              );
                            })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
