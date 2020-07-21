import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

// we are using function instead of a class because this components
// will exist only to decide what to display to the user meaning
// IT DOES NOT HOLD A STATE
export default function EditableTimer (

  {
    id,
    title,
    project,
    elapsed,
    isRunning,
    editFormOpen, // if this parameter is not passed in, it is undefined
                  // and we treat it as FALSE
  }

)
{

  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return (

    <TimerForm

      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}

    />

  );

}
