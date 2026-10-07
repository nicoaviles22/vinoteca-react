function Location() {
  return (
    <section className="location-page">
      <iframe
        className="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.2348346522554!2d-57.554964600000005!3d-37.9949826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584df8a16154fbf%3A0x5413e9014df2eb93!2sVinoteca%20Torrents!5e0!3m2!1ses!2sar!4v1785630985372!5m2!1ses!2sar"
        title="Ubicación de Vinoteca Torrents"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}

export default Location;
