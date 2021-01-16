<template>
  <div>
  
    <!-- Scrollable modal -->
    <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="`${id}ModalLabel`" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="`${id}ModalLabel`"><slot name="title"></slot></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>