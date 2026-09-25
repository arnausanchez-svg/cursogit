  <script>
    (() => {
      const zones = {
        pista: { name:'Pista General Cambio', price:69, description:'Baila en el corazón del festival con acceso a todos los escenarios, barras y activaciones.', included:'✓ Acceso general al recinto<br>✓ Pista My Stage + Sound Lab<br>✓ Food Village y My Moments' },
        front: { name:'Front Stages', price:119, description:'Tu sitio más cerca de Myke Towers. Una zona acotada frente al escenario principal.', included:'✓ Acceso prioritario al recinto<br>✓ Zona Front Stage junto a My Stage<br>✓ Barras exclusivas Front Stage' },
        tribuna: { name:'Tribuna Elevada', price:99, description:'Una perspectiva privilegiada y más espacio para vivir el show con comodidad.', included:'✓ Acceso general al recinto<br>✓ Plataforma elevada con vista panorámica<br>✓ Barra dedicada de Tribuna' },
        vip: { name:'MyFest VIP Lounge', price:189, description:'La experiencia completa: comodidad, vistas y servicios exclusivos durante toda la noche.', included:'✓ Acceso fast lane y zona elevada<br>✓ Lounge VIP, barra y aseos privados<br>✓ Copa de bienvenida + guardarropa' }
      };
      let selected = 'pista';
      const name = document.getElementById('zone-name'), description = document.getElementById('zone-description'), included = document.getElementById('zone-included'), total = document.getElementById('total-price'), reserve = document.getElementById('reserve'), quantity = document.getElementById('quantity');
      const render = () => { const zone = zones[selected], amount = zone.price * Number(quantity.value); name.textContent = zone.name; description.textContent = zone.description; included.innerHTML = zone.included; total.textContent = amount + '€'; reserve.textContent = 'Reservar ' + zone.name + ' · ' + amount + '€ ↗'; };
      document.querySelectorAll('.map-zone').forEach(zone => zone.addEventListener('click', () => { selected = zone.dataset.zone; document.querySelectorAll('.map-zone').forEach(item => item.classList.toggle('selected', item.dataset.zone === selected)); render(); }));
      quantity.addEventListener('change', render);
      document.querySelectorAll('.ticket .cta, .buy').forEach(link => link.addEventListener('click', event => { event.preventDefault(); document.getElementById('selector').scrollIntoView({behavior:'smooth', block:'start'}); }));
      reserve.addEventListener('click', () => { reserve.textContent = '✓ Zona reservada · continuar pago'; reserve.style.background = '#5ca9ff'; reserve.style.color = '#111'; });
    })();
  </script>
  <script></script>