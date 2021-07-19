scrolling(event) {
    if (event.detail.scrollTop >= this.vejaCardapio.nativeElement.offsetTop) {
      this.events.publish('mostraSegment', true);
      this.mostrarSegment = true;
    }
    if (event.detail.scrollTop < this.vejaCardapio.nativeElement.offsetTop) {
      this.events.publish('mostraSegment', false);
      this.mostrarSegment = false;
    }
    const coordenadaInicioBibsfihas = document.getElementById('1').offsetTop;
    const coordenadaFimBibsfihas = document.getElementById('1_fim').offsetTop;
    const coordenadaInicioSalgados = document.getElementById('8').offsetTop;
    const coordenadaFimSalgados = document.getElementById('8_fim').offsetTop;
    const coordenadaInicioBebidas = document.getElementById('4').offsetTop;
    const coordenadaFimBebidas = document.getElementById('4_fim').offsetTop;
    const coordenadaInicioSobremesas = document.getElementById('5').offsetTop;
    const coordenadaFimSobremesas = document.getElementById('5_fim').offsetTop;
    const coordenadaInicioPratos = document.getElementById('2').offsetTop;
    const coordenadaFimPratos = document.getElementById('2_fim').offsetTop;
    const coordenadaInicioPizzas = document.getElementById('3').offsetTop;
    const coordenadaFimPizzas = document.getElementById('3_fim').offsetTop;
    const coordenadaInicioKits = document.getElementById('6').offsetTop;
    const coordenadaFimKits = document.getElementById('6_fim').offsetTop;
    const coordenadaInicioCombos = document.getElementById('7').offsetTop;
    const coordenadaFimCombos = document.getElementById('7_fim').offsetTop;
    const coordenadaInicioLanches = document.getElementById('9').offsetTop;
    const coordenadaFimLanches = document.getElementById('9_fim').offsetTop;
    const coordenadaInicioCongelados = document.getElementById('15').offsetTop;
    const coordenadaFimCongelados = document.getElementById('15_fim').offsetTop;
    //if( document.getElementById('16') ) {
      const coordenadaInicioElo = document.getElementById('16').offsetTop;
      const coordenadaFimElo = document.getElementById('16_fim').offsetTop;
    //}
    if (!this.clicouNaCategoriaCarrossel) {
     // if(coordenadaInicioElo && coordenadaFimElo) {
        if (event.detail.scrollTop >= coordenadaInicioElo && event.detail.scrollTop <= coordenadaFimElo) {
          if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_16').offsetLeft - 80)) {
            setTimeout(() => {
              document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_16').offsetLeft - 80;
            }, 100);
          }
  
  
          this.removeCategoriaAtiva();
          document.getElementById('item_carrosel_16').classList.add('ativo');
        }
      //}
      
      if (event.detail.scrollTop >= coordenadaInicioBibsfihas && event.detail.scrollTop <= coordenadaFimBibsfihas) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_1').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_1').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_1').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioSalgados && event.detail.scrollTop <= coordenadaFimSalgados) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_8').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_8').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_8').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioBebidas && event.detail.scrollTop <= coordenadaFimBebidas) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_4').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_4').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_4').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioSobremesas && event.detail.scrollTop <= coordenadaFimSobremesas) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_5').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_5').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_5').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioPratos && event.detail.scrollTop <= coordenadaFimPratos) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_2').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_2').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_2').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioPizzas && event.detail.scrollTop <= coordenadaFimPizzas) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_3').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_3').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_3').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioKits && event.detail.scrollTop <= coordenadaFimKits) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_6').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_6').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_6').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioCombos && event.detail.scrollTop <= coordenadaFimCombos) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_7').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_7').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_7').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioLanches && event.detail.scrollTop <= coordenadaFimLanches) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_9').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_9').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_9').classList.add('ativo');
      }
      if (event.detail.scrollTop >= coordenadaInicioCongelados && event.detail.scrollTop <= coordenadaFimCongelados) {
        if (document.getElementById('slide').scrollLeft != (document.getElementById('item_carrosel_15').offsetLeft - 80)) {
          setTimeout(() => {
            document.getElementById('slide').scrollLeft = document.getElementById('item_carrosel_15').offsetLeft - 80;
          }, 100);
        }
        this.removeCategoriaAtiva();
        document.getElementById('item_carrosel_15').classList.add('ativo');
      }
    }
  }