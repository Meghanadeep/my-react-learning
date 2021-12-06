import StateTutorial from './hooks/StateTutorial';
import WithoutuseReducer from './hooks/UseReducer/WithoutuseReducer';
import UseReducer from './hooks/UseReducer/UseReducer';
import UseEffectHook from './hooks/UseEEffect/UseEffect';
import UseRef from './hooks/UseRef';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseForwardrefImperative from './hooks/UseForwardRef/UseForwardref';
import WithoutUseContext from './hooks/UseContext/WithoutContext/WithoutUseContext';
import UseContext from './hooks/UseContext/WithContext/UseContext';
import UseMemoHook from './hooks/UseMemoHook';
import UseCallback from './hooks/UseCallback/UseCallback';
import './App.css';

function App() {
  return (
    <div className='App'>  
      <h1>Learn react hooks here</h1>
      <StateTutorial />
      <hr/>
      <WithoutuseReducer />
      <hr/>
      <UseReducer />
      <hr/>
      <UseEffectHook />
      <hr/>
      <UseRef />
      <hr/>
      <UseLayoutEffect />
      <hr/>
      <UseForwardrefImperative />
      <WithoutUseContext />
      <hr/>
      <UseContext />
      <hr/>
      <UseMemoHook />
      <hr/>
      <UseCallback />
    </div>
  );
}

export default App;
