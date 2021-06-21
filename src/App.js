import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
	return (
		<>
			<div className="container mt-4">
				<div className="row">
					<h2>Buttons</h2>
				</div>

				{/* Button with Variants and Disabled and Shadow */}
				<div className="row mt-4">
					<div className="col-12 mt-2">
						<div>
							<i>Default Button</i>
						</div>
						<Button />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Button variant=&quot;outline&quot; &gt;</i>
						</div>
						<Button variant="outline" />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Button variant=&quot;text&quot; &gt;</i>
						</div>
						<Button variant="text" />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>
								&lt;Button variant=&quot;disableShadow&quot;
								&gt;
							</i>
						</div>
						<Button variant="disableShadow" />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Button variant=&quot;disabled&quot; &gt;</i>
						</div>
						<Button variant="disabled" />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>
								&lt;Button
								variant=&quot;text-disabledShadow&quot; &gt;
							</i>
						</div>
						<Button variant="text-disabled" />
					</div>
				</div>

				{/* Button with Icon at Start and End */}
				<div className="row mt-4">
					<div className="col-sm-6 mt-2">
						<div>
							<i>
								&lt;Button color=&quot;primary&quot;
								startIcon=&quot;local_grocery_store&quot; &gt;
							</i>
						</div>
						<Button
							color="primary"
							startIcon="local_grocery_store"
						/>
					</div>
					<div className="col-sm-6 mt-2">
						<div>
							<i>
								&lt;Button color=&quot;primary&quot;
								endIcon=&quot;local_grocery_store&quot; &gt;
							</i>
						</div>
						<Button color="primary" endIcon="local_grocery_store" />
					</div>
				</div>

				{/* Button Sizes Row */}
				<div className="row mt-4">
					<div className="col-sm-4 mt-2">
						<div>
							<i>&lt;Button size=&quot;sm&quot; &gt;</i>
						</div>
						<Button color="primary" size="sm" />
					</div>
					<div className="col-sm-4 mt-2">
						<div>
							<i>&lt;Button size=&quot;md&quot; &gt;</i>
						</div>
						<Button color="primary" size="md" />
					</div>
					<div className="col-sm-4 mt-2">
						<div>
							<i>&lt;Button size=&quot;lg&quot; &gt;</i>
						</div>
						<Button color="primary" size="lg" />
					</div>
				</div>

				{/* Button Different Colors */}
				<div className="row mt-4">
					<div className="col-sm-3 mt-2">
						<div>
							<i>&lt;Button color=&quot;default&quot; &gt;</i>
						</div>
						<Button color="default" />
					</div>
					<div className="col-sm-3 mt-2">
						<div>
							<i>&lt;Button color=&quot;primary&quot; &gt;</i>
						</div>
						<Button color="primary" />
					</div>
					<div className="col-sm-3 mt-2">
						<div>
							<i>&lt;Button color=&quot;secondary&quot; &gt;</i>
						</div>
						<Button color="secondary" />
					</div>
					<div className="col-sm-3 mt-2">
						<div>
							<i>&lt;Button color=&quot;danger&quot; &gt;</i>
						</div>
						<Button color="danger" />
					</div>
				</div>
			</div>
			<div
				className="row mt-4 p-4"
				style={{
					backgroundColor: "#1C313A",
					color: "white",
				}}
			>
				<div className="col-12 text-center">
					<p>Created By Adeoluwa Adeboye - devChallenge.io</p>
				</div>
			</div>
		</>
	);
}

export default App;
