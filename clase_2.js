let notaEstudiante = 95;


function evaluarNota(nota) {
    if (nota >= 90) {
        return "¡Excelente! Has aprobado con una calificación sobresaliente.";
    } else if (nota >= 75) {
        return "¡Bien! Has aprobado con una buena calificación.";
    } else if (nota >= 60) {
        return "Suficiente. Has aprobado, pero hay margen de mejora.";
    } else {
        return "Lo siento, no has aprobado. Necesitas esforzarte más la próxima vez.";
    }
}


console.log(evaluarNota(notaEstudiante));
