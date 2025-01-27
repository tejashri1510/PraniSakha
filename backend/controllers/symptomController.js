exports.checkSymptoms = (req, res) => {
    const { symptoms } = req.body;
  
    if (!symptoms) {
      return res.status(400).json({ error: 'Symptoms are required' });
    }
  
    // Simulate a simple rule-based symptom checker
    let diseaseClass = '';
    let guidance = '';
  
    if (symptoms.includes('itchy') || symptoms.includes('redness')) {
      diseaseClass = 'Skin Infection';
      guidance = 'Provide a clean and dry environment. Use prescribed ointments.';
    } else if (symptoms.includes('cough') || symptoms.includes('fever')) {
      diseaseClass = 'Respiratory Infection';
      guidance = 'Ensure hydration and rest. Consult a veterinarian if symptoms persist.';
    } else {
      diseaseClass = 'General Illness';
      guidance = 'Monitor symptoms closely and seek veterinary care if necessary.';
    }
  
    res.json({ diseaseClass, guidance });
  };
  