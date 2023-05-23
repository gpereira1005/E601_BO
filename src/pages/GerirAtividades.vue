<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h4>Lista Atividades</h4>
      </div>
      <div class="col-6">
        <p-button type="info" round @click.native.prevent="anularMarcacao">
                Registar Atividade
              </p-button>
      </div>
    </div>
      <div class="image-container">
        <img src="../assets/img/inicio2.png" alt="Descrição da imagem" />
        <div class="image-caption">
          Canoagem no Douro
        </div>
        <div class="edit-icon"><span class="ti-pencil"></span></div>
        <div class="delete-icon"><span class="ti-trash"></span></div>
      </div>
      <div class="image-container">
        <img src="../assets/img/inicio2.png" alt="Descrição da imagem" />
        <div class="image-caption">
          Canoagem no Douro
        </div>
        <div class="edit-icon"><span class="ti-pencil"></span></div>
        <div class="delete-icon"><span class="ti-trash"></span></div>
      </div>
      <div class="image-container">
        <img src="../assets/img/inicio2.png" alt="Descrição da imagem" />
        <div class="image-caption">
          Canoagem no Douro
        </div>
        <div class="edit-icon"><span class="ti-pencil"></span></div>
        <div class="delete-icon"><span class="ti-trash"></span></div>
      </div>
      <div class="image-container">
        <img src="../assets/img/inicio2.png" alt="Descrição da imagem" />
        <div class="image-caption">
          Canoagem no Douro
        </div>
        <div class="edit-icon"><span class="ti-pencil"></span></div>
        <div class="delete-icon"><span class="ti-trash"></span></div>
      </div>
    </div>
    
</template>
<script>
export default {
};
</script>
<style>
.image-container {
      position: relative;
      display: inline-block;
      margin-left: 60px;
      margin-bottom: 50px ;
    }

    .image-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 10px;
      width: 100%;
    }

.edit-icon {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}

.delete-icon {
  position: absolute;
  top: 0;
  right: 50px;
  padding: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
</style>
