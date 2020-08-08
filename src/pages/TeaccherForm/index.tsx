import React from 'react';
import PageHeader from '../../components/PageHeader';



function TeacherForm(){
    return(
      <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer das aulas."
      description="O primeiro passo e preecher esse formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name"/>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"/>
          </div>

          <div className="input-block">
            <label htmlFor="whatsApp">WhatsApp</label>
            <input type="text" id="whatsApp"/>
          </div>


        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;